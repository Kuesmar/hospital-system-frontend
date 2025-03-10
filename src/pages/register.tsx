import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
            <h1 className={title()}>Register</h1>
            <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold" htmlFor="email">
                    Email
                </label>
                <input
                    className="p-2 border border-gray-300 rounded-md"
                    type="email"
                    id="email"
                    name="email"
                />
                </div>
                <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold" htmlFor="password">
                    Password
                </label>
                <input
                    className="p-2 border border-gray-300 rounded-md"
                    type="password"
                    id="password"
                    name="password"
                />
                </div>
                <button
                className="bg-blue-500 text-white py-2 rounded-md"
                type="submit"
                >
                Register
                </button>
            </form>
        </div>
      </section>
    </DefaultLayout>
  );
}
