const Container = ({ data }) => {
  if(data.length > 0){
    return (
        <div className="grid">
            {data.map((item, idx) => {
              return (
                <a href={item?.link} target="_blank" key={idx}>
                  <div className="col">
                    <h2 className="itemTitle">{item?.title || item?.link}</h2>
                      {
                          item?.description && (
                              <p className="itemDescription">{item.description}</p>
                   
                          )
                      }
                    {item?.tags && (
                      <div className="tags">
                        {item.tags.map((tag, idx) => {
                          return (
                            <h4 data={tag} key={idx} className="tag">
                              {tag}
                            </h4>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        );
  }
};

export default Container;
