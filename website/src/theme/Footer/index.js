import React, { Fragment } from 'react';
import classnames from 'classnames';

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Footer() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { themeConfig = {} } = siteConfig;
  const { footer } = themeConfig;

  if (!footer) {
    return null;
  }

  const { copyright, links = [], logo } = footer;

  return (
    <footer
      className={classnames('footer', {
        'footer--dark': footer.style === 'dark',
      })}>
      <div className="container">
        {links && links.length > 0 && (
          <div className="row footer__links">
            {links.map((linkItem, i) => (
              <div key={i} className="col footer__col">
                {linkItem.title != null ? (
                  <h4 className="footer__title">{linkItem.title}</h4>
                ) : null}
                {linkItem.items != null &&
                Array.isArray(linkItem.items) &&
                linkItem.items.length > 0 ? (
                  <ul className="footer__items">
                    {linkItem.items.map((item, idx, arr) => (
                      <Fragment key={idx}>
                        <li key={item.href || item.to} className="footer__item">
                          <Link
                            className="footer__link-item"
                            {...item}
                            {...(item.href
                              ? {
                                  target: '_blank',
                                  rel: 'noopener noreferrer',
                                  href: item.href,
                                }
                              : {
                                  to: useBaseUrl(item.to),
                                })}>
                            {item.label}
                          </Link>
                        </li>
                        {arr.length - 1 === idx && i === 2 && (
                          <>
                            <li
                              key="gh-star"
                              className="footer__item footer__item--gh">
                              <iframe
                                title="github"
                                src={`https://ghbtns.com/github-btn.html?user=${siteConfig.organizationName}&repo=${siteConfig.projectName}&type=star&count=true&size=small`}
                              />
                            </li>
                            <li key="license" className="footer__item">
                              <a
                                href={useBaseUrl(
                                  'img/icons/148705-essential-collection/license/license.html',
                                )}>
                                License for icons
                              </a>
                            </li>
                          </>
                        )}
                      </Fragment>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        )}
        {(logo || copyright) && (
          <div className="text--center">
            {logo && logo.src && (
              <a
                className="footer__logo margin-bottom--sm"
                href="https://www.canopytax.com/"
                target="_blank"
                rel="noopener noreferrer">
                <img alt={logo.alt} src={useBaseUrl(logo.src)} />
              </a>
            )}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
