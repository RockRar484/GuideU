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
import { useAuth } from '@/context/AuthContext'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const AuthView = ({mode}) => {
    const [Password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const router = useRouter()
    const { login } = useAuth()
    
    const handleSignIn = async () => {
        try {
          await login(email, Password)
          setMessage('Logged in successfully')
        } catch (error) {
          setMessage(error.message)
        }
      }
    const handleSignUp = async (e) => {
        if(confirmPassword === Password){
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/signup/', {
                    email: email,
                    password: Password
                })
                setMessage("User Registered Successfully")
                mode="sign_in"
            } catch (error) {
                setMessage(error.response.data.email)
            }
        }
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    
    }
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
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button onClick={handleSignIn}>Sign In</Button>
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
                    <Input id="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="space-y-1">
                    <Label htmlFor="new">Password</Label>
                    <Input id="new" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="space-y-1">
                    <Label htmlFor="confirm">Confirm Password</Label>
                    <Input id="confirm" type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button onClick={handleSignUp} >Sign Up</Button>
                    <p className="text-red-500 space-y-1 ">{message}</p>
                </CardFooter>
                </Card>
            </TabsContent>
            </Tabs>
    </>
  )
}

export default AuthView