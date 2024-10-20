<script lang="ts">
    import { Button, buttonVariants } from '$lib/components/ui/button'
    import { Input } from '$lib/components/ui/input/index.js'
    import { Label } from '$lib/components/ui/label/index.js'
    import * as Table from '$lib/components/ui/table/index.js'
    import * as Dialog from '$lib/components/ui/dialog'
    import type { Tab } from './Tab'

    let toggleTab = false
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

    export let name = ''
    export let number = ''
    export let isVerified = false
</script>

<Table.Row>
    <Table.Cell>
        {name}
        {#if isVerified}
            <i class="mi mi-circle-check text-green-500"></i>
        {/if}
    </Table.Cell>
    <Table.Cell>{number}</Table.Cell>
    <Table.Cell>
        <Dialog.Root>
            <Dialog.Trigger><i class="mi mi-edit"></i></Dialog.Trigger>
            <Dialog.Content class="sm:max-w-[425px]">
                <Dialog.Header>
                    <Dialog.Title>
                        {name}
                        {#if isVerified}
                            <i class="mi mi-circle-check text-green-500"></i>
                        {/if}
                    </Dialog.Title>
                    <Dialog.Description>
                        Edit this contatcs name or number
                    </Dialog.Description>
                </Dialog.Header>
                <div class="grid gap-4 py-4">
                    <div class="grid grid-cols-4 items-center gap-4">
                        <Label for="name" class="text-right">Name</Label>
                        <Input id="name" value={name} class="col-span-3" />
                    </div>
                    <div class="grid grid-cols-4 items-center gap-4">
                        <Label for="username" class="text-right">Number</Label>
                        <Input
                            id="username"
                            value={number}
                            class="col-span-3"
                        />
                    </div>
                </div>
                <Dialog.Footer>
                    <Button type="submit">Save changes</Button>
                </Dialog.Footer>
            </Dialog.Content>
        </Dialog.Root>
    </Table.Cell>
    <Table.Cell>
        <Dialog.Root>
            <Dialog.Trigger><i class="mi mi-delete"></i></Dialog.Trigger>
            <Dialog.Content class="sm:max-w-[425px]">
                <Dialog.Header>
                    <Dialog.Title>Delete Contact</Dialog.Title>
                </Dialog.Header>
                <div class="grid gap-4 py-4">
                    Are you sure you want to delete this contact?
                </div>
                <Dialog.Footer>
                    <Button type="submit">Delete</Button>
                </Dialog.Footer>
            </Dialog.Content>
        </Dialog.Root>
    </Table.Cell>
    <Table.Cell>
        {#if !isVerified}
            <Button>Invite</Button>
        {/if}
    </Table.Cell>
</Table.Row>
