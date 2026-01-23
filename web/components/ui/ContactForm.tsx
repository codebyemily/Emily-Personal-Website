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
    <div className=" max-w-md mx-auto space-y-4 sm:space-6">

    <Card className="">
      <CardHeader className="flex flex-col items-center pb-4 sm:pb-6">
        <CardTitle className="text-lg sm:text-xl md:text-2xl courier-prime-regular text-center">Contact Me!</CardTitle>
      </CardHeader> 

      <CardContent>
        <form className="flex flex-col gap-4 sm:gap-6" method="POST" action="https://formspree.io/f/mgoovyjg">
          <Input 
            name="name" 
            placeholder="Name" 
            required 
            className="border-border text-sm sm:text-base" 
          />
          <Input 
            name="email" 
            type="email" 
            placeholder="Email" 
            required 
            className="border-border text-sm sm:text-base" 
          />
          <div className="space-y-2">
            <Textarea 
              name="message" 
              placeholder="Message" 
              rows={5} 
              required 
              className="border-border overflow-auto resize-none whitespace-normal text-sm h-50 sm:text-base" 
              maxLength={100} 
              onChange={(e) => setCharCount(e.target.value.length)}
            />
            <div className="flex flex-row justify-between text-xs sm:text-sm text-muted-foreground">
              <p>{charCount}/100</p>
              <p>Max Characters: 100</p>
            </div>
          </div>
          <Button type="submit" className="w-full border border-border">
            <p className="courier-prime-regular text-sm sm:text-base">Send</p>
          </Button>
        </form>
      </CardContent>
    </Card>
    
    <Link href="/" className="block">
      <Button type="button" className="border border-border">
        <p className="courier-prime-regular text-sm sm:text-base">Go Back</p>
      </Button>
    </Link>
    
    </div>

  )
}
