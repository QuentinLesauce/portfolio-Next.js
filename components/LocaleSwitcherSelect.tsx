'use client';

import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { ChangeEvent, ReactNode, useTransition } from 'react';
import { useRouter, usePathname } from '@/navigation';

import { MdLanguage } from "react-icons/md";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known params
        // are used in combination with a given pathname. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <div className="flex items-center hover:drop-shadow-customShadowLight hover:dark:drop-shadow-customShadowDark">
      <span className="text-gray-700 dark:text-gray-300">
        <MdLanguage size={24} />
      </span>
      <select
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
        className="w-full ml-3 bg-transparent border-none outline-none text-gray-700 dark:text-gray-300 cursor-pointer"
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
}