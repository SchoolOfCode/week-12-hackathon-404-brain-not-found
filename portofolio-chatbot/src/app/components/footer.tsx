import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

