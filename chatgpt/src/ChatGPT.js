import React, { useState } from "react";

const ChatGPT = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("Result will appear here");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      const apiUrl = "https://api.openai.com/v1/chat/completions";
      const apiHeaders = {
        Authorization: "Bearer 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",
        "Content-Type": "application/json",
      };
      const apiBody = {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: query }],
      };
  
      console.log("Making API Request...");
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: apiHeaders,
        body: JSON.stringify(apiBody),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
  
      console.log("API Response Received...");
      const data = await response.json();
      setResponse(data.choices[0].text);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your query"
        value={query}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>{response}</p>
    </div>
  );
};

export default ChatGPT ;

