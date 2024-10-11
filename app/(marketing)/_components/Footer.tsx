"use client";

import React from "react";
import { footerLinks } from "./data";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-amber-50 min-h-[80vh] p-4 lg:p-16">
      <div className="container m-auto border-t border-t-gray-300">
        <footer className=" text-slate-800 py-10 px-5">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Logo & Description */}
            <div>
              <div className="flex items-center mb-4">
                <Image
                  height={32}
                  width={32}
                  src="/logo.svg"
                  alt="Todoist Logo"
                  className="w-8 h-8 mr-2"
                />
                <span className="text-lg font-bold">SwiftTask</span>
              </div>
              <p>
                Join millions of people who organize work and life with
                SwiftTask.
              </p>
            </div>

            {/* Features, Resources, Company */}
            {footerLinks.slice(0, 3).map((section) => (
              <div key={section.title}>
                <h4 className="font-bold mb-4">{section.title}</h4>
                <ul>
                  {section.links?.map((link) => (
                    <li key={link.text} className="mb-2">
                      <Link href={link.link}>
                        <h1 className="hover:translate-x-2 hover:text-amber-600 transition-all">
                          {link.text}
                        </h1>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social Media Icons */}

            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {footerLinks[3]?.icons?.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link key={social.name} href={social.link}>
                      <h1
                        aria-label={social.name}
                        className=" hover:text-slate-600"
                      >
                        <Icon />
                      </h1>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Link href={"/privacy"} className="underline">
                privacy
              </Link>
              <Link href={"/terms"} className="underline">
                terms
              </Link>
              <Link href={"/security"} className="underline">
                security
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
