"use client";
import { cn } from "@/lib/utils";
import React, {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import {ScrollArea} from "@/components/ui/scroll-area";

interface ModalContextType {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState(false);
    return (
        <ModalContext.Provider value={{ open, setOpen }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};

export function Modal({ children }: { children: ReactNode }) {
    return <ModalProvider>{children}</ModalProvider>;
}

export const ModalTrigger = ({
                                 children,
                                 className,
                             }: {
    children: ReactNode;
    className?: string;
}) => {
    const { setOpen } = useModal();
    return (
        <button
            className={cn(
                "px-4 py-2 rounded-md text-black dark:text-white text-center relative overflow-hidden",
                className
            )}
            onClick={() => setOpen(true)}
        >
            {children}
        </button>
    );
};

export const ModalBody = ({
                              children,
                              className,
                          }: {
    children: ReactNode;
    className?: string;
}) => {
    const { open, setOpen } = useModal();
    const modalRef = useRef(null);
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 h-full w-full flex items-center justify-center z-50">
            <Overlay />
            <div
                ref={modalRef}
                className={cn(
                    "min-h-[50%] max-h-[90%] md:max-w-[40%] bg-white dark:bg-neutral-950 border border-transparent dark:border-neutral-800 md:rounded-2xl relative z-50 flex flex-col flex-1 overflow-hidden",
                    className
                )}
            >
                <CloseIcon />
                <ScrollArea className="h-[80dvh] w-full rounded-md border">
                    {children}
                </ScrollArea>
            </div>
        </div>
    );
};

export const ModalContent = ({
                                 children,
                                 className,
                             }: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col flex-1 p-3 md:p-10", className)}>
            {children}
        </div>
    );
};

const Overlay = ({ className }: { className?: string }) => {
    const { setOpen } = useModal();
    return (
        <div
            className={`modal-overlay fixed inset-0 h-full w-full bg-black bg-opacity-50 z-50 ${className}`}
            onClick={() => setOpen(false)}
        ></div>
    );
};

const CloseIcon = () => {
    const { setOpen } = useModal();
    return (
        <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 group z-[9999]"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black dark:text-white h-4 w-4 group-hover:scale-125 group-hover:rotate-3 transition duration-200"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
            </svg>
        </button>
    );
};

