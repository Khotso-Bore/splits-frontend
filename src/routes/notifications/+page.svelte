<script lang="ts">
    import { Button } from '$lib/components/ui/button'
    import * as Card from '$lib/components/ui/card/index.js'
    import * as Dialog from '$lib/components/ui/dialog'
</script>

<Card.Root class="w-[450px]">
    <Card.Header>
        <Card.Title>Notifications</Card.Title>
    </Card.Header>
    <Card.Content>
        <div class="space-y-8">
            <div class="flex items-center justify-between">
                <div class="ml-4 space-y-1">
                    <p class="text-m font-medium leading-none">
                        Debt Notice - R250
                    </p>
                    <p class="text-muted-foreground text-sm">
                        Mahlatse &middot; Steers &middot; 12 Sep 15:00
                    </p>
                </div>
                <div class="flex gap-4">
                    <Button variant="outline">Reject</Button>
                    <Button>Accept</Button>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <div class="ml-4 space-y-1">
                    <p class="text-m font-medium leading-none">
                        Debt Notice - R350
                    </p>
                    <p class="text-muted-foreground text-sm">
                        KP &middot; Jack &middot; 11 Sep 13:42
                    </p>
                </div>
                <div class="flex gap-4">
                    <Button variant="outline">Reject</Button>
                    <Button>Accept</Button>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <div class="ml-4 space-y-1">
                    <p class="text-m font-medium leading-none">
                        Debt Notice - R50
                    </p>
                    <p class="text-muted-foreground text-sm">
                        KP &middot; Dash &middot; 9 Sep 10:12
                    </p>
                </div>
                <div class="flex gap-4">
                    <Button variant="outline">Reject</Button>
                    <Button>Accept</Button>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <div class="ml-4 space-y-1">
                    <p class="text-m font-medium leading-none">
                        Debt Notice - R20
                    </p>
                    <p class="text-muted-foreground text-sm">
                        Tshepo &middot; Kota &middot; 6 Sep 11:20
                    </p>
                </div>
                <div class="flex gap-4">
                    <Button variant="outline">Reject</Button>
                    <Button>Accept</Button>
                </div>
            </div>
        </div>
    </Card.Content>
</Card.Root>
