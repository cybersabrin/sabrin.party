<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> updates</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <style type="text/css">body {font-family: 'MS Gothic';position: relative;display: flex;flex-flow: column;width: 65vw;left: 50%;margin-left: -32.5vw;background: url(/assets/03-images/whitegrain.gif);}
        html {padding:40px;}
        h2 {color: #134E87; font-weight:900;}
        .banner { background-image: url(https://i.postimg.cc/tgyYMcBJ/xml.webp); background-image: no-repeat; background-size: 100% 100%; min-height:30vh;z-index:5; display:block; margin-top:10px;margin-bottom:10px;}
        a:hover{font-style:italic;}
        a{color:#134E87;background-color:#FFF585;}
        .bold {font-weight:900;}
        .dates{font-weight:900; margin-top:-10px;display:block;}
        </style>
      </head>
      <body>
        <div class="container-md px-3 py-3 markdown-body">
          <header class="py-5">
            <h2><xsl:value-of select="/rss/channel/title"/></h2>
            <p><xsl:value-of select="/rss/channel/description"/></p>
            <a class="head_link" target="_blank">
              <xsl:attribute name="href">
                <xsl:value-of select="/rss/channel/link"/>
              </xsl:attribute>visit my website &#x2192;</a>
          </header>
          <div class="banner"></div>
          <h2>recent updates</h2>
          <xsl:for-each select="/rss/channel/item">
            <div class="pb-5">
              <h3 class="mb-0">
                <a target="_blank">
                  <xsl:attribute name="href">
                    <xsl:value-of select="link"/>
                  </xsl:attribute>
                  <xsl:value-of select="title"/>
                </a>
              </h3>
              <span class="dates"><small>
                updated: <xsl:value-of select="pubDate" />
              </small></span>
             <p>tags: <xsl:value-of select="category" />
             </p>
            </div>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>