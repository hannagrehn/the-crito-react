import React, { useEffect, useState } from 'react'
import SearchDate from './SearchDate'
import { useParams } from 'react-router-dom'

const greyButtons = [
    { id: 1, type: "grey", text: "Digitalization", url: "#" },
    { id: 2, type: "grey", text: "School", url: "#" },
    { id: 3, type: "grey", text: "IT", url: "#" },
    { id: 4, type: "grey", text: "Design", url: "#" },
    { id: 5, type: "grey", text: "Work", url: "#" },
    { id: 6, type: "grey", text: "Tech", url: "#" }
]

const Digitailization = () => {

    const { id } = useParams();
    const [article, setArticle] = useState({});


        useEffect(() => {
            const fetchArticle = async () => {
                try {
                    const response = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`);
                    if (response.status !== 200) {
                        console.log(`Helvete: ${response.status}`);
                        return;
                    }
                    const data = await response.json();
                    setArticle(data);                 
                } catch (error) {
                    console.error("No article for you:", error);
                }
            };
            fetchArticle();
        }, [id]);
        
    return (
        <>
            <div className="container">
                <div className="news-details">
                    <div>
                        <div>
                            <h2>{article.title}</h2>
                            <div className="this-date">
                                <p>{article.date}</p>
                                <div className="yellow-dot"></div>
                                <p>{article.category}</p>
                                <div className="yellow-dot"></div>
                                <p>{article.author}</p>
                            </div>
                            <img src={article.imageUrl} alt="" />
                        </div>

                        <div className="text-info">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. <br />
                                <br />
                                Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.<br />
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.<br />
                                <br />
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.<br />
                                <br />
                                Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.<br />
                                Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                            </p>
                            <div className="quote">
                                <div className="quotes">‟</div>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                                </span>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            </p>
                        </div>
                        
                        <div className="grey-btns">
                            {
                                greyButtons.map((button) => (
                                    <button className="gray-btn" key={button.id} type={button.type}  url={button.url} >
                                        {button.text}
                                    </button>
                                        
                                ))
                            }
                        </div>
                    </div>
                <SearchDate/>
            </div>
        </div>   
        </>
    )
}

export default Digitailization
