// components/StatChat.tsx
import { useState } from 'react';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>; // parsed match data
};

export function StatChat({ data }: Props): JSX.Element {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([]);
  const [input, setInput] = useState('Summarize Liverpool’s attacking progression.');
  const [loading, setLoading] = useState(false);

  console.log({ data });

  const send = async () => {
    if (!input.trim()) {
      return;
    }

    setMessages([...messages, { role: 'user', content: input }]);
    setLoading(true);

    const res = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data, question: input }),
    });

    const { answer } = await res.json();
    setMessages((prev) => [...prev, { role: 'ai', content: answer }]);
    setInput('');
    setLoading(false);
  };

  return (
    <div>
      <div>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.role === 'user' ? 'right' : 'left' }}>
            <p>{msg.content}</p>
          </div>
        ))}
      </div>
      <textarea rows={2} value={input} onChange={(e) => setInput(e.target.value)} disabled={loading} />
      <button onClick={send} disabled={loading}>
        Send
      </button>
    </div>
  );
}
