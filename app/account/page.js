import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest Area",
};

export default async function Page() {
  const session = await auth();

  const firstName = session.user.name.split(" ").at(0);

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-accent-400">
          Welcome back, {firstName}! 👋
        </h1>

        <p className="mt-2 text-lg text-primary-200 max-w-2xl leading-8">
          Manage your reservations, update your profile, and keep your guest
          information up to date—all from one place.
        </p>
      </header>

      <div className="rounded-lg border border-primary-800 bg-primary-900 p-6">
        <h2 className="text-xl font-semibold text-primary-100 mb-3">
          Guest Dashboard
        </h2>

        <p className="text-primary-300 leading-7">
          Use the navigation on the left to:
        </p>

        <ul className="mt-4 space-y-3 text-primary-200">
          <li>🏡 View and manage your reservations</li>
          <li>✏️ Edit upcoming bookings</li>
          <li>❌ Cancel reservations when needed</li>
          <li>👤 Update your guest profile and preferences</li>
        </ul>
      </div>
    </section>
  );
}