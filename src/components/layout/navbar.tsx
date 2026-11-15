"use client";
import { Brand } from "./brand";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { core } from "@/lib/operations";

const menus = [
  {name: "Services", links: [...core.map(s => [s.name, "/services/" + s.slug]), ["All services", "/services"]]},
  {name: "Company", links: [["About Us", "/about"], ["Careers", "/careers"]]},
];

export function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const header = useRef<HTMLElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const path = usePathname();
  const close = () => {setOpen(null);setMobile(false);};
  useEffect(() => {
    function outside(event: PointerEvent) {if (!header.current?.contains(event.target as Node)) close();}
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, []);
  return <header className="ops-header" ref={header} onKeyDown={event => {if (event.key === "Escape" && (open || mobile)) { close(); trigger.current?.focus(); }}}>
    <a href="#main-content" className="ops-skip">Skip to content</a>

    <div className="ops-wrap ops-nav">
      <Brand onClick={close} />
      <nav className={"ops-nav-links" + (mobile ? " is-mobile" : "")} aria-label="Main navigation" id="site-navigation">
        {menus.map(menu => <div className="ops-nav-group" key={menu.name}>
          <button type="button" aria-expanded={open === menu.name} aria-controls={"nav-" + menu.name} onClick={e => {trigger.current = e.currentTarget; setOpen(open === menu.name ? null : menu.name);}}>{menu.name}<span className="ops-menu-indicator" aria-hidden="true" /></button>
          <div hidden={open !== menu.name} className="ops-dropdown" id={"nav-" + menu.name}>
            {menu.links.map(([name, href]) => <Link key={href} href={href} onClick={close} aria-current={path === href ? "page" : undefined}>{name}</Link>)}
          </div>
        </div>)}
        <Link href="/service-area" onClick={close} aria-current={path === "/service-area" ? "page" : undefined}>Service Area</Link>
        <Link href="/news" onClick={close} aria-current={path.startsWith("/news") ? "page" : undefined}>News</Link>
        <Link href="/contact" onClick={close} aria-current={path === "/contact" ? "page" : undefined}>Contact</Link>
        <Link className="ops-mobile-quote-link" href="/contact" onClick={close}>Request a quote </Link>
      </nav>
      <Link href="/contact" className="ops-button ops-nav-quote" onClick={close}>Request a quote </Link>
      <button type="button" className="ops-mobile-toggle" aria-label={mobile ? "Close navigation" : "Open navigation"} aria-expanded={mobile} aria-controls="site-navigation" onClick={e => {trigger.current = e.currentTarget; if(mobile) close(); else setMobile(true);}}>{mobile ? <X /> : <Menu />}</button>
    </div>
  </header>;
}
