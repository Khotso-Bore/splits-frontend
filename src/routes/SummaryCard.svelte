<script lang="ts">
    import * as Card from '$lib/components/ui/card/index.js'
    import * as Table from '$lib/components/ui/table/index.js'
    import * as Dialog from '$lib/components/ui/dialog'
    import { ScrollArea } from '$lib/components/ui/scroll-area/index.js'
    import type { Tab } from './Tab'

    export let name = ''
    export let number = ''
    export let tabs: Tab[] = []
    export let isVerified = false

    const total = tabs.reduce((total, item) => total + item.Amount, 0)
</script>

<div class="flex items-center">
    <div class="ml-4 space-y-1">
        <Dialog.Root>
            <Dialog.Trigger>
                <p class="text-m font-medium leading-none">{name}</p>
            </Dialog.Trigger>
            <Dialog.Content class="max-w-2xl">
                <Card.Header>
                    <Card.Title
                        >{name}
                        {#if isVerified}
                            <i class="mi mi-circle-check text-green-500"></i>
                        {/if}
                    </Card.Title>
                    <Card.Description>{number}</Card.Description>
                </Card.Header>
                <Card.Content>
                    <ScrollArea class="h-72">
                        <Table.Root>
                            <Table.Header>
                                <Table.Row>
                                    <Table.Head>Occassion</Table.Head>
                                    <Table.Head>Category</Table.Head>
                                    <Table.Head>Date</Table.Head>
                                    <Table.Head>Amount</Table.Head>
                                    <Table.Head>Acknowledged</Table.Head>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {#each tabs as tab}
                                    <Table.Row>
                                        <Table.Cell>{tab.Occassion}</Table.Cell>
                                        <Table.Cell>{tab.Category}</Table.Cell>
                                        <Table.Cell>{tab.Date}</Table.Cell>
                                        <Table.Cell>R{tab.Amount}</Table.Cell>
                                        <Table.Cell
                                            >{tab.Ackowmleged}</Table.Cell
                                        >
                                    </Table.Row>
                                {/each}
                            </Table.Body>
                        </Table.Root>
                    </ScrollArea>
                    <div class="flex items-center">
                        <div class="ml-4 space-y-1">
                            <p class="text-m font-medium leading-none">Total</p>
                        </div>
                        <div
                            class="{total >= 0
                                ? 'text-green-500'
                                : 'text-red-500'} ml-auto font-medium"
                        >
                            {total >= 0 ? '+' : '-'}R{total}
                        </div>
                    </div>
                </Card.Content>
            </Dialog.Content>
        </Dialog.Root>
        <p class="text-muted-foreground text-sm">
            last updated: {tabs[0].Date}
        </p>
    </div>
    <div
        class="{total >= 0
            ? 'text-green-500'
            : 'text-red-500'} ml-auto font-medium"
    >
        {total >= 0 ? '+' : '-'}R{total}
    </div>
</div>
