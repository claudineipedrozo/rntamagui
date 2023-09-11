import { XStack, Avatar, Text, H4, YStack } from "tamagui";

export function User() {
     return(
        <XStack space="$2" ai="center">
            <Avatar size="$5" circular>
                <Avatar.Image 
                    src= 'https://github.com/claudineipedrozo.png'
                />
                <Avatar.Fallback backgroundColor="$gray5" />
            </Avatar>
            <YStack>
            <Text color="$gray10">
                Olá,
            </Text>

            <H4 fontWeight="bold"mt="$-2">
                Claudinei
            </H4>
            </YStack>
        </XStack>
     )
}