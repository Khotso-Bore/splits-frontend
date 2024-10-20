<script lang="ts">
    import { Button, buttonVariants } from '$lib/components/ui/button'
    import { Input } from '$lib/components/ui/input/index.js'
    import { Label } from '$lib/components/ui/label/index.js'
    import * as Card from '$lib/components/ui/card/index.js'
    import * as Select from '$lib/components/ui/select/index.js'
    import * as Table from '$lib/components/ui/table/index.js'
    import * as Dialog from '$lib/components/ui/dialog'
    import { ScrollArea } from '$lib/components/ui/scroll-area/index.js'
    import * as Tabs from '$lib/components/ui/tabs/index.js'
    import { Checkbox } from '$lib/components/ui/checkbox/index.js'
    import SummaryCard from './SummaryCard.svelte'
    import type { NewTab, Tab } from './Tab'
    import ContactsCard from './ContactsCard.svelte'
    import AddTab from './AddTab.svelte'

    let toggleTab = false
    let selected = { value: '', label: '' }
    const categories = [
        { label: 'Food and Drinks', value: 'food_drinks' },
        { label: 'Transport', value: 'transport' },
        { label: 'Movies', value: 'movies' },
        { label: 'Events', value: 'events' },
        { label: 'Accommodation', value: 'accommodation' },
        { label: 'Games', value: 'games' },
        { label: 'Loan', value: 'loan' },
        { label: 'Emergency', value: 'emergency' },
    ]

    let tabs: Tab[] = [
        {
            Occassion: 'Steers',
            Category: 'Food and Drinks',
            Date: '22/09/2024',
            Amount: 100.0,
            Ackowmleged: 'YES',
        },
        {
            Occassion: 'Jefferys',
            Category: 'Food and Drinks',
            Date: '22/09/2024',
            Amount: 60.0,
            Ackowmleged: 'YES',
        },
    ]
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css"
    />
</svelte:head>

<div class="flex-1 space-y-4 p-8 pt-6">
    <div class="flex items-center justify-between w-96 space-y-2">
        <h2 class="text-3xl font-bold tracking-tight">Splits</h2>
        <a href="/notifications" class="flex text-2xl"
            ><p>4</p>
            <i class="mi mi-email"></i></a
        >
    </div>
    <Tabs.Root value="overview" class="w-[400px]">
        <Tabs.List class="grid w-full grid-cols-2">
            <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
            <Tabs.Trigger value="contacts">Contacts</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="overview">
            <div id="body" class="flex flex-col gap-2">
                {#if toggleTab}
                    <AddTab />
                {:else}
                    <Button
                        on:click={() => {
                            toggleTab = !toggleTab
                        }}>Open New Tab</Button
                    >
                {/if}
                <div id="summary">
                    <Card.Root class="w-[350px]">
                        <Card.Header>
                            <Card.Title>Summary</Card.Title>
                        </Card.Header>
                        <Card.Content>
                            <div class="space-y-8">
                                <SummaryCard
                                    name={'Metro'}
                                    {tabs}
                                    isVerified={true}
                                />
                                <SummaryCard
                                    name={'KP'}
                                    {tabs}
                                    isVerified={true}
                                />
                                <SummaryCard
                                    name={'Sihle'}
                                    {tabs}
                                    isVerified={true}
                                />
                            </div>
                        </Card.Content>
                    </Card.Root>
                </div>
            </div>
        </Tabs.Content>
        <Tabs.Content value="contacts">
            <Dialog.Root>
                <Dialog.Trigger>Add Contact</Dialog.Trigger>
                <Dialog.Content class="sm:max-w-[425px]">
                    <Dialog.Header>
                        <Dialog.Title>Add Contact</Dialog.Title>
                        <Dialog.Description>
                            Add a new number to your list of contacs.
                        </Dialog.Description>
                    </Dialog.Header>
                    <div class="grid gap-4 py-4">
                        <div class="grid grid-cols-4 items-center gap-4">
                            <Label for="name" class="text-right">Name</Label>
                            <Input
                                id="name"
                                placeholder="Metro"
                                class="col-span-3"
                            />
                        </div>
                        <div class="grid grid-cols-4 items-center gap-4">
                            <Label for="username" class="text-right"
                                >Number</Label
                            >
                            <Input
                                id="username"
                                placeholder="082 608 5258"
                                class="col-span-3"
                            />
                        </div>
                        <div class="flex flex-col items-center space-x-2 gap-2">
                            <p>Contact isn't verified. Invite to splits :)</p>
                            <div>
                                <Checkbox id="terms" />
                                <Label
                                    for="terms"
                                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Invite
                                </Label>
                            </div>
                        </div>
                    </div>
                    <Dialog.Footer>
                        <Button type="submit">Save Conatact</Button>
                    </Dialog.Footer>
                </Dialog.Content>
            </Dialog.Root>
            <Table.Root class="w-max">
                <Table.Header>
                    <Table.Row>
                        <Table.Head>Name</Table.Head>
                        <Table.Head>Number</Table.Head>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <ContactsCard
                        name={'Metro'}
                        isVerified={true}
                        number={'0826085258'}
                    />
                    <ContactsCard
                        name={'Maryam'}
                        isVerified={false}
                        number={'0826105558'}
                    />
                    <ContactsCard
                        name={'KP'}
                        isVerified={false}
                        number={'0826085898'}
                    />
                </Table.Body>
            </Table.Root>
        </Tabs.Content>
    </Tabs.Root>
</div>
