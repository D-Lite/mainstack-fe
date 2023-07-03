export function dateToLongDate(date: Date): string {
    const dated = new Date(date);

    return dated.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

export function objectToArray<T>(obj: { [key: string]: T }): Array<{ key: string; value: T }> {
    return Object.entries(obj).map(([key, value]) => ({ key, value }));
}

export function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getGreetingTime(): 'morning' | 'afternoon' | 'evening' {
    const currentHour = new Date().getHours();

    if (currentHour >= 6 && currentHour < 12) {
        // currentTimeoftheDay = 'morning';
        return 'morning';
    } else if (currentHour >= 12 && currentHour < 18) {
        // currentTimeoftheDay = 'afternoon';
        return 'afternoon';
    } else {
        // currentTimeoftheDay = 'evening';
        return 'evening';
    }
}