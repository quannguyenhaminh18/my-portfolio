'use client';

import {useRouter, usePathname} from '@/i18n/navigation';
import React from 'react';

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        router.replace(pathname, {locale: e.target.value});
    };

    return (
        <select onChange={handleChange} className="bg-transparent text-white border border-white px-2 py-1 rounded">
            <option value="vi">Tiếng Việt</option>
            <option value="en">English</option>
        </select>
    );
}
