import { YStack, ListItem as TListItem, YGroup, ScrollView, Separator } from 'tamagui'
import { ChevronRight, FolderGit } from '@tamagui/lucide-icons'


export function ListItem() {
    return (
        <ScrollView>
        <YStack>
            <TListItem space="$2" mt='$6'>
              <YGroup alignSelf='center' bordered width={320} size='$4' separator={<Separator />}>
              <YGroup.Item>
                <TListItem hoverTheme icon={FolderGit} title= "https://github.com/claudineipedrozo/rntamagui" iconAfter={ChevronRight} />
              </YGroup.Item>

              <YGroup.Item>
                <TListItem hoverTheme icon={FolderGit} title= "https://github.com/claudineipedrozo/ImcCalculator" iconAfter={ChevronRight}  />
              </YGroup.Item>

              <YGroup.Item>
                <TListItem hoverTheme icon={FolderGit} title= "https://github.com/claudineipedrozo/ImcCalculator" iconAfter={ChevronRight} />
              </YGroup.Item>

              <YGroup.Item>
                <TListItem hoverTheme icon={FolderGit} title= "https://github.com/claudineipedrozo/ImcCalculator" iconAfter={ChevronRight} />
              </YGroup.Item>

              <YGroup.Item>
                <TListItem hoverTheme icon={FolderGit} title= "https://github.com/claudineipedrozo/rntamagui" iconAfter={ChevronRight}  />
              </YGroup.Item>

              <YGroup.Item>
                <TListItem hoverTheme icon={FolderGit} title= "https://github.com/claudineipedrozo/ImcCalculator" iconAfter={ChevronRight}  />
              </YGroup.Item>

              <YGroup.Item>
                <TListItem hoverTheme icon={FolderGit} title= "https://github.com/claudineipedrozo/ImcCalculator" iconAfter={ChevronRight} />
              </YGroup.Item>

              <YGroup.Item>
                <TListItem hoverTheme icon={FolderGit} title= "https://github.com/claudineipedrozo/ImcCalculator" iconAfter={ChevronRight} />
              </YGroup.Item>
              <YGroup.Item>
                <TListItem hoverTheme icon={FolderGit} title= "https://github.com/claudineipedrozo/rntamagui" iconAfter={ChevronRight} />
              </YGroup.Item>

              <YGroup.Item>
                <TListItem hoverTheme icon={FolderGit} title= "https://github.com/claudineipedrozo/ImcCalculator" iconAfter={ChevronRight} />
              </YGroup.Item>

              <YGroup.Item>
                <TListItem hoverTheme icon={FolderGit} title= "https://github.com/claudineipedrozo/ImcCalculator"iconAfter={ChevronRight} />
              </YGroup.Item>

              <YGroup.Item>
                <TListItem hoverTheme icon={FolderGit} title= "https://github.com/claudineipedrozo/ImcCalculator"iconAfter={ChevronRight} />
              </YGroup.Item>

              <YGroup.Item>
                <TListItem hoverTheme icon={FolderGit} title= "https://github.com/claudineipedrozo/rntamagui" iconAfter={ChevronRight} />
              </YGroup.Item>

              <YGroup.Item>
                <TListItem hoverTheme icon={FolderGit} title= "https://github.com/claudineipedrozo/ImcCalculator" iconAfter={ChevronRight} />
              </YGroup.Item>

              <YGroup.Item>
                <TListItem hoverTheme icon={FolderGit} title= "https://github.com/claudineipedrozo/ImcCalculator" iconAfter={ChevronRight} />
              </YGroup.Item>

              <YGroup.Item>
                <TListItem hoverTheme icon={FolderGit} title= "https://github.com/claudineipedrozo/ImcCalculator" iconAfter={ChevronRight} />
              </YGroup.Item>

              </YGroup>
            </TListItem>
        </YStack>
        </ScrollView>

    )
}