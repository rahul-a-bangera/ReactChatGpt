import React, { Component } from "react";
class ChatGPT extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      response: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Make an API request to the OpenAI ChatGPT API.
    const apiUrl = "https://api.openai.com/v1/engines/chat/completions";
    const apiHeaders = {
      Authorization: `Bearer YOUR_API_KEY`,
    };
    const apiBody = {
      prompt: this.state.query,
    };

    fetch(apiUrl, {
      method: "POST",
      headers: apiHeaders,
      body: JSON.stringify(apiBody),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          response: data.choices[0].text,
        });
      });
  };
}
return <ChatGPT />;
