import React, {useState} from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { login } from './auth'

const AuthView = ({mode}) => {
    const [Password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    

  return (
    <>
        <Tabs defaultValue={mode} className="w-[350px] m-auto">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="sign_in">Sign In</TabsTrigger>
                <TabsTrigger value="sign_up">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="sign_in">
                <Card>
                <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" />
                    </div>
                    <div className="space-y-1">
                    <Label htmlFor="username">Password</Label>
                    <Input id="password"  />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Sign In</Button>
                </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="sign_up">
                <Card>
                <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                    
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email"  />
                    </div>
                    <div className="space-y-1">
                    <Label htmlFor="new">Password</Label>
                    <Input id="new" type="password" />
                    </div>
                    <div className="space-y-1">
                    <Label htmlFor="confirm">Confirm Password</Label>
                    <Input id="confirm" type="password" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Sign Up</Button>
                </CardFooter>
                </Card>
            </TabsContent>
            </Tabs>
    </>
  )
}

export default AuthView