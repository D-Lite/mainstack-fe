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