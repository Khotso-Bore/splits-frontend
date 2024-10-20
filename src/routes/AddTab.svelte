<script lang="ts">
    import { Button, buttonVariants } from '$lib/components/ui/button'
    import { Input } from '$lib/components/ui/input/index.js'
    import { Label } from '$lib/components/ui/label/index.js'
    import * as Card from '$lib/components/ui/card/index.js'
    import * as Select from '$lib/components/ui/select/index.js'
    import type { NewTab, Tab } from './Tab'
    import * as Command from '$lib/components/ui/command/index.js'
    import * as Popover from '$lib/components/ui/popover/index.js'
    import { tick } from 'svelte'
    import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down'
    import Check from 'lucide-svelte/icons/check'
    import { cn } from '$lib/utils.js'

    let toggleTab = false
    let selected = { value: '', label: '' }

    let open = false
    let value: number = 0

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

    const contacts = [
        { label: 'Thato', value: 1 },
        { label: 'Metro', value: 2 },
        { label: 'KP', value: 3 },
        { label: 'Maryam', value: 4 },
        { label: 'MK', value: 5 },
        { label: 'Spova', value: 6 },
    ]

    $: selectedValue =
        contacts.find((f) => f.value === value)?.label ?? 'Select a Contact...'

    // We want to refocus the trigger button when the user selects
    // an item from the list so users can continue navigating the
    // rest of the form with the keyboard.
    function closeAndFocusTrigger(triggerId: string) {
        open = false
        tick().then(() => {
            document.getElementById(triggerId)?.focus()
        })
    }

    let newTab: NewTab = {
        Tab: {
            Occassion: '',
            Category: '',
            Date: '',
            Amount: 0,
            Ackowmleged: 'NO',
        },
        DebtorId: 0,
    }

    function addNewTab() {
        newTab.Tab.Category = selected.value
        console.log(newTab)
        newTab = {
            Tab: {
                Occassion: '',
                Category: '',
                Date: '',
                Amount: 0,
                Ackowmleged: 'NO',
            },
            DebtorId: 0,
        }
    }
</script>

<div id="new-tab" class="">
    <Card.Root class="w-[350px]">
        <Card.Header>
            <Card.Title>Open Tab</Card.Title>
            <Card.Description>open a new tab</Card.Description>
        </Card.Header>
        <Card.Content>
            <div class="grid w-full items-center gap-4">
                <div class="flex flex-col space-y-1.5">
                    <Label for="occasion">Occassion</Label>
                    <Input
                        id="occasion"
                        type="text"
                        placeholder="Drinks at Cape Caprice"
                        bind:value={newTab.Tab.Occassion}
                    />
                </div>
                <div class="flex flex-col space-y-1.5">
                    <Label for="category">Category</Label>
                    <Select.Root bind:selected>
                        <Select.Trigger id="category">
                            <Select.Value placeholder="Select" />
                        </Select.Trigger>
                        <Select.Content>
                            {#each categories as category}
                                <Select.Item
                                    value={category.value}
                                    label={category.label}
                                    >{category.label}</Select.Item
                                >
                            {/each}
                        </Select.Content>
                    </Select.Root>
                </div>
                <div class="flex flex-col space-y-1.5">
                    <Label for="amount">Amount</Label>
                    <Input
                        id="amount"
                        type="number"
                        placeholder="100.00"
                        bind:value={newTab.Tab.Amount}
                    />
                </div>
                <div class="flex flex-col space-y-1.5">
                    <Popover.Root bind:open let:ids>
                        <Popover.Trigger asChild let:builder>
                            <Button
                                builders={[builder]}
                                variant="outline"
                                role="combobox"
                                aria-expanded={open}
                                class="w-[200px] justify-between"
                            >
                                {selectedValue}
                                <ChevronsUpDown
                                    class="ml-2 h-4 w-4 shrink-0 opacity-50"
                                />
                            </Button>
                        </Popover.Trigger>
                        <Popover.Content class="w-[200px] p-0">
                            <Command.Root>
                                <Command.Input
                                    placeholder="Search framework..."
                                />
                                <Command.Empty
                                    >No framework found.</Command.Empty
                                >
                                <Command.Group>
                                    {#each contacts as contact}
                                        <Command.Item
                                            value={contact.value.toString()}
                                            onSelect={(currentValue) => {
                                                value = parseInt(currentValue)
                                                newTab.DebtorId = value
                                                closeAndFocusTrigger(
                                                    ids.trigger
                                                )
                                            }}
                                        >
                                            <Check
                                                class={cn(
                                                    'mr-2 h-4 w-4',
                                                    value !== contact.value &&
                                                        'text-transparent'
                                                )}
                                            />
                                            {contact.label}
                                        </Command.Item>
                                    {/each}
                                </Command.Group>
                            </Command.Root>
                        </Popover.Content>
                    </Popover.Root>
                </div>
            </div>
        </Card.Content>
        <Card.Footer class="flex justify-between">
            <Button
                variant="outline"
                on:click={() => {
                    toggleTab = !toggleTab
                }}>Close</Button
            >
            <Button on:click={addNewTab}>Add</Button>
        </Card.Footer>
    </Card.Root>
</div>
