import { Component } from "@/types/Util"
import { AuthContextProvider } from "./AuthProvider"
import { SidebarContextProvider } from "./SidebarContext"


export const GlobalContextProvider:Component = ({ children }) => {
	return (
		<AuthContextProvider>
		<SidebarContextProvider>
		{children}
		</SidebarContextProvider>
        </AuthContextProvider>
	)
}