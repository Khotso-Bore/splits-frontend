export interface Tab {
    Occassion: string
    Category: string
    Date: string
    Amount: number
    Ackowmleged: 'YES' | 'NO' | 'Pending'
}

export interface NewTab {
    Tab: Tab
    DebtorId: number
}
