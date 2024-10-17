import React, { useState } from 'react'
import { Box, Drawer, Grid, IconButton, Stack, styled, Typography } from "@mui/material"
import { Close as CloseIcon, ManageAccounts as ManageAccountsIcon, Menu as MenuIcon, Dashboard as DashboardIcon, Groups as GroupsIcon, Message as MessageIcon, ExitToApp as ExitToAppIcon } from "@mui/icons-material"
import { useLocation, Link as LinkComponent, Navigate } from "react-router-dom"
import { matBlack } from '../../constants/color'
import { useDispatch, useSelector } from 'react-redux'
import { adminLogout } from '../../redux/thunks/admin'


const Link = styled(LinkComponent)`
    text-decoration: none;
    border-radius: 2rem;
    padding: 1rem 2rem;
    color: black;
    &:hover{
        color: rgba(0,0,0,0.54);
    }
`

export const adminTabs = [
    {
        name: "Dashboard",
        path: "/admin/dashboard",
        icon: <DashboardIcon />,
    },
    {
        name: "Users",
        path: "/admin/users",
        icon: <ManageAccountsIcon />,
    },
    {
        name: "Chats",
        path: "/admin/chats",
        icon: <GroupsIcon />,
    },
    {
        name: "Messages",
        path: "/admin/messages",
        icon: <MessageIcon />,
    },
]

const Sidebar = ({ w = "100%" }) => {

    const location = useLocation();
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(adminLogout());
    }

    return (
        <Stack
            width={w}
            direction={"column"}
            p={"3rem"}
            spacing={"3rem"}
        >
            <Typography variant="h4" textTransform={"uppercase"}>
                Chat-Bridge
            </Typography>

            <Stack>
                {
                    adminTabs.map((tab) => (
                        <Link
                            key={tab.path}
                            to={tab.path}
                            sx={
                                location.pathname === tab.path && {
                                    bgcolor: matBlack,
                                    color: "white",
                                    ":hover": {
                                        color: "white"
                                    },
                                }
                            }
                        >
                            <Stack
                                direction={"row"}
                                alignItems={"center"}
                                spacing={"1rem"}
                            >
                                {tab.icon}
                                <Typography>
                                    {tab.name}
                                </Typography>
                            </Stack>
                        </Link>
                    ))
                }
                <Link
                    onClick={logoutHandler}
                >
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={"1rem"}
                    >
                        <ExitToAppIcon color={"error"} />
                        <Typography color={"error"} >
                            Logout
                        </Typography>
                    </Stack>
                </Link>
            </Stack>

        </Stack>
    )
}

const AdminLayout = ({ children }) => {

    const { isAdmin } = useSelector((state) => state.auth);

    const [isMobile, setIsMobile] = useState(false)

    const handleMobile = () => setIsMobile(!isMobile);

    const handleClose = () => setIsMobile(false);

    if (!isAdmin) return <Navigate to="/admin" />

    return (
        <Grid container minHeight={"100vh"}>

            <Box
                sx={{
                    display: {
                        xs: "block",
                        md: "none",
                    },
                    position: "fixed",
                    right: "1rem",
                    top: "1rem",
                }}
            >
                <IconButton onClick={handleMobile}>
                    {
                        isMobile ?
                            (<CloseIcon />) : (<MenuIcon />)
                    }
                </IconButton>
            </Box>

            <Grid
                item
                md={4}
                lg={3}
                sx={{
                    display: {
                        xs: "none",
                        md: "block",
                    }
                }}
            >
                <Sidebar />

            </Grid>
            <Grid
                item
                xs={12}
                md={8}
                lg={9}
                sx={{
                    bgcolor: "#f5f5f5"
                }}
            >
                {children}
            </Grid>

            <Drawer open={isMobile} onClose={handleClose}>
                <Sidebar w="70vw" />
            </Drawer>



        </Grid>
    )
}

export default AdminLayout