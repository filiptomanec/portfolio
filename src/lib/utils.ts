import {clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: (string | undefined | false | null | Record<string, boolean>)[]) {
    return twMerge(clsx(inputs))
}

export function getYearsOfExperience(dateString: string) {
    const startDate = new Date(dateString);
    const currentDate = new Date();

    let yearsDiff = currentDate.getFullYear() - startDate.getFullYear();

    if (
        currentDate.getMonth() < startDate.getMonth() ||
        (currentDate.getMonth() === startDate.getMonth() && currentDate.getDate() < startDate.getDate())
    ) {
        yearsDiff--;
    }

    return yearsDiff;
}
