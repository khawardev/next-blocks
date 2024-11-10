export const Feature01Code = `'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)
  const reset = () => setCount(0)

  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle className="text-center">Counter</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <p className="text-4xl font-bold mb-4">{count}</p>
          <div className="flex justify-center space-x-2">
            <Button onClick={decrement} variant="outline">-</Button>
            <Button onClick={increment} variant="outline">+</Button>
          </div>
          <Button onClick={reset} variant="ghost" className="mt-2">Reset</Button>
        </div>
      </CardContent>
    </Card>
  )
}`;
