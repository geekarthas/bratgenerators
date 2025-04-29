'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 p-4 bg-black/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
          <motion.h1 
            className="text-2xl md:text-3xl font-bold cursor-pointer hover:opacity-80 transition-opacity"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Brat Text Generator Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span>Brat Text Generator</span>
            </div>
          </motion.h1>
        </Link>
      </div>
    </header>
  );
}