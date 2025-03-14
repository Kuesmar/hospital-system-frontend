import { title } from "@/components/primitives";
import { EyeFilledIcon } from "@/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/icons/EyeSlashFilledIcon";
import DefaultLayout from "@/layouts/default";
import { Input } from "@heroui/input";
import { useMemo, useState } from "react";

export default function DocsPage() {
    const [isVisible, setIsVisible] = useState(false);
	const [emailValue, setEmailValue] = useState("");
    const toggleVisibility = () => setIsVisible(!isVisible);
	const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

	const isInvalid = useMemo(() => {
	  if (emailValue === "") return false;
  
	  return validateEmail(emailValue) ? false : true;
	}, [emailValue]);

    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className={title()}>Register</h1>
                    <form className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
						<Input
							className="max-w-xs"
							color={isInvalid ? "danger" : "default"}
							errorMessage="Please enter a valid email"
							isInvalid={isInvalid}
							label="Email"
							type="email"
							value={emailValue}
							variant="bordered"
							onValueChange={setEmailValue}
						/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Input
                                className="max-w-xs"
                                endContent={
                                    <button
                                        aria-label="toggle password visibility"
                                        className="focus:outline-none"
                                        type="button"
                                        onClick={toggleVisibility}
                                    >
                                        {isVisible ? (
                                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                        ) : (
                                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                        )}
                                    </button>
                                }
                                label="Password"
                                placeholder="Enter your password"
                                type={isVisible ? "text" : "password"}
                                variant="bordered"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
						<Input
                                className="max-w-xs"
                                endContent={
                                    <button
                                        aria-label="toggle password visibility"
                                        className="focus:outline-none"
                                        type="button"
                                        onClick={toggleVisibility}
                                    >
                                        {isVisible ? (
                                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                        ) : (
                                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                        )}
                                    </button>
                                }
                                label="Confirm Password"
                                placeholder="Enter your password"
                                type={isVisible ? "text" : "password"}
                                variant="bordered"
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
