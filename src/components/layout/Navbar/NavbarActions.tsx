import Link from "next/link";
import Button from "@/components/common/Button";
import { NavbarData } from "@/types/navbar";

interface NavbarActionsProps {
  actions: NavbarData["actions"];
}

export default function NavbarActions({
  actions,
}: NavbarActionsProps) {
  return (
    <div className="hidden items-center gap-4 lg:flex">
      <Link href={actions.login.href}>
        <Button variant="secondary">
          {actions.login.label}
        </Button>
      </Link>

      <Link href={actions.signup.href}>
        <Button>
          {actions.signup.label}
        </Button>
      </Link>
    </div>
  );
}