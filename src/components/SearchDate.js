import React from 'react'

const SearchDate = () => {
  return (
    <div className="search-box">
            <form>
                <div className="magnifying-glass"><i className="fa-regular fa-magnifying-glass"></i></div>
                <input id="searchbox" type="text" placeholder="Type to search..." />
            </form>

            <div className="recent">
                <h3>Recent Posts</h3>
                <div className="underline"></div>
                <div>
                    <article>How To Blow Through Capital At An Incredible Rate</article>
                    <p>Jan 14, 2020</p>
                </div>
                <div>
                    <article>Design Studios That Everyone Should Know About? </article>
                    <p>Jan 14, 2020</p>
                </div>
                <div>
                    <article>How did we get 1M+ visitors in 30 days without anything!</article>
                    <p>Jan 14, 2020</p>
                </div>
                <div>
                    <article>Figma On Figma: How We Built Our Website Design System</article>
                    <p className="last">Jan 14, 2020</p>
                </div>
            </div>

            <div className="categories">
                <h3>Categories</h3>
                <div className="underline"></div>
                <p>Technology - <span>20 Posts</span></p>
                <p>Freelancing -  <span>07 Posts</span></p>
                <p>Writing -  <span>16 Posts</span></p>
                <p>Marketing -  <span>11 Posts</span></p>
                <p>Business -  <span>35 Posts</span></p>
                <p className="last">Education -  <span>14 Posts</span></p>
            </div>
        </div>
  )
}

export default SearchDate