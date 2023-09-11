import NavigationHeaderSecondary from "components/navigation/header/secondary";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavigationHeaderSecondary />
      {children}
    </section>
  );
}
