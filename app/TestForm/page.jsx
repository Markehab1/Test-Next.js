"use client"

function TestForm() {
  const handleClick = async () => {
    const res = await fetch('/api/hello', {
      method: 'POST',
      body: JSON.stringify({ name: 'Mark' }),
    })
    const data = await res.json()
    console.log(data)
  }

  return <button onClick={handleClick}>Send POST</button>
}

export default TestForm