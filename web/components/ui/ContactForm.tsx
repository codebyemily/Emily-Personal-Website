"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import * as React from "react";
export function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Handle form submission logic here


}
export function ContactForm() {
    const [charCount, setCharCount] = React.useState(0);

  return (
    <div className="max-w-md mx-auto">

    <Card className="mb-5">
      <CardHeader className="flex flex-col items-center">
        <CardTitle className="text-xl courier-prime-regular text-center">Contact Me!</CardTitle>
      </CardHeader> 

      <CardContent>
        <form className="flex flex-col gap-4" method="POST" action="https://formspree.io/f/mgoovyjg">
          <Input name="name" placeholder="Name" required className="border-border" />
          <Input name="email" type="email" placeholder="Email" required className="border-border" />
          <Textarea name="message" placeholder="Message" rows={5} required className="border-border overflow-auto resize-none w-50 h-30 whitespace-normal" maxLength={100} onChange={(e) => setCharCount(e.target.value.length)}/>
          <div className="flex flex-row justify-between">
            <p>{charCount}</p>
            <p>Max Char:100</p>

          </div>
          <Button type="submit" className="w-full border">
            <p className="courier-prime-regular">Send</p>
          </Button>
        </form>
      </CardContent>
        
    </Card>
    <Link href="/">
        <Button type="submit" className="border">
                <p className="courier-prime-regular">Back</p>
        </Button>
    </Link>
    
    </div>

  )
}
