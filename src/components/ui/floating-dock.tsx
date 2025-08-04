import {cn} from "@/lib/utils";
import {
    AnimatePresence,
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import React, {useRef, useState} from "react";
import {Skill} from "@/data/projects";

export const FloatingDock = ({
                                 items,
                                 className,
                             }: {
    items: Skill[];
    className?: string;
}) => {
    let mouseX = useMotionValue(Infinity);
    return (
        <div className="relative h-fit flex items-center justify-center">
            <motion.div
                onMouseMove={(e) => {
                    mouseX.set(e.pageX);
                }}
                onMouseLeave={() => mouseX.set(Infinity)}
                className={cn(
                    "flex gap-2 md:gap-4",
                    "mx-auto h-16 items-end  rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3",
                    className
                )}
            >
                {items.map((item, index) => (
                    <IconContainer mouseX={mouseX} key={index}{...item} />
                ))}
            </motion.div>
        </div>
    );
};

function IconContainer({
                           mouseX,
                           title,
                           icon,
                       }: {
    mouseX: MotionValue;
    title: string;
    icon: string;
}) {
    let ref = useRef<HTMLDivElement>(null);

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? {x: 0, width: 0};

        return val - bounds.x - bounds.width / 2;
    });

    let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

    let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
    let heightTransformIcon = useTransform(
        distance,
        [-150, 0, 150],
        [20, 40, 20]
    );

    let width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    let widthIcon = useSpring(widthTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let heightIcon = useSpring(heightTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            ref={ref}
            style={{width, height}}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
        >
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{opacity: 0, y: 10, x: "-50%"}}
                        animate={{opacity: 1, y: 0, x: "-50%"}}
                        exit={{opacity: 0, y: 2, x: "-50%"}}
                        className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
                    >
                        {title}
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div
                style={{width: widthIcon, height: heightIcon}}
                className="flex items-center justify-center"
            >
                <img src={icon} alt={title}/>
            </motion.div>
        </motion.div>
    );
}
