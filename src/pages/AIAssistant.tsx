import { useState, type FormEvent } from 'react'
import type { ChatMessage } from '../types/chat'

const initialMessages: ChatMessage[] = [
  {
    id: '1',
    role: 'assistant',
    content:
      "Hi! I'm here to help with questions about your cycle, symptoms, or general health. What's on your mind?",
  },
]

function getMockResponse(userMessage: string): string {
  const lower = userMessage.toLowerCase()

  if (lower.includes('cramp')) {
    return 'Cramps are common during menstruation. A heating pad, gentle movement, and staying hydrated can help. If pain is severe or unusual for you, it is worth checking in with a doctor.'
  }

  if (lower.includes('late') || lower.includes('missed')) {
    return "Periods can be late for many reasons—stress, weight changes, travel, or hormonal shifts. If you're sexually active, a pregnancy test can help rule that out. If it's been more than a few weeks, consider seeing a doctor."
  }

  return "That's a great question. I'm still a demo version right now, so I can't give a full answer yet. Once connected to a real AI backend, I'll be able to provide more personalized guidance."
}

function AIAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [input, setInput] = useState('')

  function handleSend(e: FormEvent) {
    e.preventDefault()

    if (!input.trim()) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    }

    const assistantMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: getMockResponse(input),
    }

    setMessages((prev) => [...prev, userMessage, assistantMessage])
    setInput('')
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 flex flex-col h-[80vh]">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        AI Health Assistant
      </h1>

      <p className="text-gray-600 mb-6">
        Not a substitute for medical advice—always consult a healthcare
        professional for serious concerns.
      </p>

      <div className="flex-1 overflow-y-auto bg-white/60 backdrop-blur-sm rounded-2xl p-6 space-y-4 border border-white/50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm ${
                msg.role === 'user'
                  ? 'bg-pink-500 text-white rounded-br-sm'
                  : 'bg-purple-100 text-gray-800 rounded-bl-sm'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="flex gap-3 mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <button
          type="submit"
          className="bg-pink-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default AIAssistant