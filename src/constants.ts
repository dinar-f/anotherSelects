import { Item } from "./types/types";

export const initialFormValues = {
    country: null,
    city: null,
    education: null,
    accommodation: null,
};

export const educationOptions: Item[] = [
    { id: 1, name: "Технический" },
    { id: 2, name: "Гуманитарный" },
]

export const defaultCountryValues = {
    cities: [],
    accommodation: []
}

export const contriesList = [
    {
        id: 1, name: "Россия",
        city: [
            { id: 1, name: "Москва" },
            { id: 2, name: "Сочи" },
        ],
        accommodation: [
            { id: 1, name: "Общежитиe" },
            { id: 2, name: "Не интересует" },
            { id: 3, name: "Общежития + Аренда" },
            { id: 4, name: "Аренда" }
        ]
    },
    {
        id: 2, name: "Беларусь",
        city: [
            { id: 3, name: "Минск" },
            { id: 4, name: "Гомель" },
        ],
        accommodation: [
            { id: 1, name: "Общежитие" },
            { id: 2, name: "Не интересует" }
        ]
    },
]

export const initialOption: string = "-- Select value --"