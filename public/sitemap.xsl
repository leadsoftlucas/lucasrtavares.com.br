<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="pt-BR">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex"/>
        <title>Mapa do site · lucasrtavares.com.br</title>
        <style>
          body { margin: 0; font-family: Montserrat, "Segoe UI", Arial, sans-serif; background: #0f1425; color: #e6edf7; }
          header { padding: 40px 20px 24px; background: linear-gradient(135deg, #0f1425, #0c2fa5); }
          header h1 { margin: 0 0 6px; font-size: 28px; letter-spacing: -0.02em; }
          header p { margin: 0; color: #9fe9fa; font-size: 14px; }
          main { max-width: 960px; margin: 0 auto; padding: 24px 20px 60px; }
          table { width: 100%; border-collapse: collapse; background: rgba(255,255,255,.04); border-radius: 12px; overflow: hidden; }
          th, td { text-align: left; padding: 12px 16px; font-size: 14px; border-bottom: 1px solid rgba(255,255,255,.08); }
          th { font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: #9fe9fa; background: rgba(255,255,255,.06); }
          a { color: #1cc8ee; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .alt a { color: #9fe9fa; margin-right: 10px; font-size: 12px; }
          .count { margin: 0 0 14px; color: #9fe9fa; font-size: 13px; }
        </style>
      </head>
      <body>
        <header>
          <h1>🗺️ Mapa do site</h1>
          <p>lucasrtavares.com.br · gerado no build</p>
        </header>
        <main>
          <p class="count"><xsl:value-of select="count(sm:urlset/sm:url)"/> páginas (cada uma em português e inglês)</p>
          <table>
            <thead><tr><th>URL</th><th>Atualizado</th><th>Idiomas</th></tr></thead>
            <tbody>
              <xsl:for-each select="sm:urlset/sm:url">
                <tr>
                  <td><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>
                  <td><xsl:value-of select="sm:lastmod"/></td>
                  <td class="alt">
                    <xsl:for-each select="xhtml:link[@hreflang != 'x-default']">
                      <a href="{@href}"><xsl:value-of select="@hreflang"/></a>
                    </xsl:for-each>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
