'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { type User } from '@supabase/supabase-js'
import Avatar from './avatar'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { signOutAction } from "@/app/actions";
// ...

export default function AccountForm({ user }: { user: User | null }) {
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [fullname, setFullname] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)
  const [phone, setPhone] = useState<string | null>(null)
  const [address, setAddress] = useState<string | null>(null)
  const [website, setWebsite] = useState<string | null>(null)
  const [avatar_url, setAvatarUrl] = useState<string | null>(null)

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, username, phone, address, website, avatar_url`)
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) {
        console.log(error)
        throw error
      }

      if (data) {
        setFullname(data.full_name)
        setUsername(data.username)
        setPhone(data.phone)
        setAddress(data.address)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  async function updateProfile({
    username,
    phone,
    address,
    website,
    avatar_url,
  }: {
    username: string | null
    fullname: string | null
    phone: string | null
    address: string | null
    website: string | null
    avatar_url: string | null
  }) {
    try {
      setLoading(true)

      const { error } = await supabase.from('profiles').upsert({
        id: user?.id as string,
        full_name: fullname,
        username,
        phone,
        address,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      })
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  }
  

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-2xl mx-auto">
      <Avatar
              uid={user?.id ?? null}
              url={avatar_url}
              size={300}
              onUpload={(url) => {
                setAvatarUrl(url)
                updateProfile({ fullname, username, phone, address, website, avatar_url: url })
              }}
              />
      <CardHeader>
        <CardTitle>Account</CardTitle>
        <CardDescription>Manage your account information</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={() => updateProfile({ fullname, username, phone, address, website, avatar_url })} className="space-y-4">
        
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" value={user?.email} disabled />
          </div>
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              value={fullname || ''}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Enter your fullname"
            />
          </div>
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              value={username || ''}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input 
              type="tel"  
              id="phone"
              value={phone || ''}
              onChange={(e) => setPhone(e.target.value)} 
              placeholder="Enter your phone number"
              />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              type="text"
              id="address"
              value={address || ''}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
            />
            <div>
              <Label htmlFor="website">Website</Label>
              <Input
                type="url"
                id="website"
                value={website || ''}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Enter your website"
              />
            </div>
            <div className="flex justify-between items-center">
              <Button type="submit" disabled={loading}>
                {loading ? "Updating.." : "Update Details"}
              </Button>
              <Button
                onClick={() => signOutAction()}
                variant="outline"
                >
                  Sign Out
                </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
)
}