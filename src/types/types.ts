export type Item = {
    id: number;
    name: string;
};

export type FormState = {
    country: string | null
    city: string | null;
    education: string | null;
    accommodation: string | null;
}

export type CountryValues = {
    cities: Item[],
    accommodation: Item[]
}

