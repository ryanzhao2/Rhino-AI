import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import Markdown from "react-markdown";
import { IKImage } from "imagekitio-react";
import axios from "axios"; // For API calls
import NewPrompt from "../../components/newPrompt/NewPrompt";

const ChatPage = () => {
  const path = useLocation().pathname;
  const chatId = path.split("/").pop();
  const [products, setProducts] = useState([]); // State to store product recommendations

  const { isPending, error, data } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/chats/${chatId}`, {
        credentials: "include",
      }).then((res) => res.json()),
  });

  // Function to handle user queries and fetch product recommendations
  const handleQuery = async (query) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/query`, {
        query,
      });
      const recommendations = response.data;
      setProducts(recommendations); // Update the product list
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          {isPending
            ? "Loading..."
            : error
            ? "Something went wrong!"
            : data?.history?.map((message, i) => (
                <div key={i}>
                  {message.img && (
                    <IKImage
                      urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                      path={message.img}
                      height="300"
                      width="400"
                      transformation={[{ height: 300, width: 400 }]}
                      loading="lazy"
                      lqip={{ active: true, quality: 20 }}
                    />
                  )}
                  <div className={message.role === "user" ? "message user" : "message"}>
                    <Markdown>{message.parts[0].text}</Markdown>
                  </div>
                </div>
              ))}
          {data && <NewPrompt data={data} onUserQuery={handleQuery} />}
        </div>
      </div>
      
      {/* Display Product Recommendations */}
      {products.length > 0 && (
        <div className="productRecommendations">
          <h2>Recommended Products</h2>
          {products.map((product, index) => (
            <div key={index} className="productCard">
              <img src={product.imageUrl} alt={product.title} />
              <div>{product.title}</div>
              <div>{product.price}</div>
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                View Product
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatPage;
