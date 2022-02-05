import { useState } from 'react';
import { AppShell, Burger, Group, Header, MediaQuery, Navbar, Text, Title, Avatar, useMantineTheme, ActionIcon, Button } from '@mantine/core';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { useHotkeys, useLocalStorageValue } from '@mantine/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import DarkModeButton from "../../customComponents/DarkModeButton"
import Link from 'next/link';

const Layout = ({ children }) => {
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();

    const [colorScheme, setColorScheme] = useLocalStorageValue({
      key: 'mantine-color-scheme',
      defaultValue: 'light',
    });
  
    const toggleColorScheme = () =>
      setColorScheme((colorScheme === 'dark' ? 'light' : 'dark'));
  
    useHotkeys([['mod+J', () => toggleColorScheme()]]);
  
    return (
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme,
          }}
        >
          <AppShell
            // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
            navbarOffsetBreakpoint="sm"
            // fixed prop on AppShell will be automatically added to Header and Navbar
            fixed
            navbar={
              <Navbar
                padding="md"
                // Breakpoint at which navbar will be hidden if hidden prop is true
                hiddenBreakpoint="sm"
                // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
                hidden={!opened}
                // when viewport size is less than theme.breakpoints.sm navbar width is 100%
                // viewport size > theme.breakpoints.sm – width is 300px
                // viewport size > theme.breakpoints.lg – width is 400px
                width={{ sm: 300, lg: 400 }}
              >
                <Text>Application navbar</Text>
              </Navbar>
            }
            header={
              <Header height={70} padding="md">
                {/* Handle other responsive styles with MediaQuery component or createStyles function */}
                <div style={{ display: 'flex', alignItems: 'center', height: '100%'}}>
                  <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                      opened={opened}
                      onClick={() => setOpened((o) => !o)}
                      size="sm"
                      color={theme.colors.gray[6]}
                      mr="xl"
                    />
                  </MediaQuery>
      
                  <Group position="apart" style={{width: '100%'}}>
                    <Group>
                      <Link href="/management">
                        <Title component="a" variant="h2" order={1} sx={{'&:hover': {cursor: 'pointer'}}}>Bảo tàng</Title>
                      </Link>
                      <Link href="/management/samples">
                        <Button component="a" variant="subtle">
                          Mẫu vật
                        </Button>
                      </Link>
                      <Link href="/management/staffs">
                        <Button component="a" variant="subtle">
                          Nhân viên
                        </Button>
                      </Link>
                      <Link href="/management/statics-and-reports">
                        <Button component="a" variant="subtle">
                          Thống kê & báo cáo
                        </Button>
                      </Link>
                    </Group>
                    <Group>
                      <Avatar radius="xl" src="avatar.png" alt="it's me" />
                      <Text>Hà Quốc Thắng</Text>
                      <DarkModeButton />
                      <Link href="/">
                        <ActionIcon variant='outline'>
                          <FontAwesomeIcon icon={faSignOutAlt} />
                        </ActionIcon>
                      </Link>
                    </Group>
                  </Group>
                </div>
              </Header>
            }
          >
            {children}
          </AppShell>
        </MantineProvider>
      </ColorSchemeProvider>
    );
};

export default Layout;
