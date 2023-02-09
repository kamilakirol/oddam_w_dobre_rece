import {ChangeEvent} from "react";

export type ContentFoundationsList = {
    id: number,
    name: string,
    description: string,
    things: string
}[]

export type FoundationsList = {
    name: string,
    text: string,
    textContent: string,
    content: ContentFoundationsList
}[]

export type ItemActiveFoundation = {
    name: string,
    text: string,
    textContent: string,
    content: ContentFoundationsList
}

export type GivePageFormValues = {
    donatedThings: string,
    bags: string,
    localization: string,
    helpGroups: string[],
    localizationSpecific: string,
    street: string,
    city: string,
    postCode: string,
    phone: string,
    dateValue: string,
    timeValue: string,
    comments: string
}

export type FormValues = {
    formValues: GivePageFormValues
}

export type HandleCheckbox =  {
    handleChangeCheckbox: (e: ChangeEvent<HTMLInputElement>) => void
}

export type StepErrorsValue = {
    formErrors:Partial<GivePageFormValues>
}

export type StepFormValue = FormValues  & {
    handleChange:(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
}

export type StepBasicValue = StepFormValue & StepErrorsValue