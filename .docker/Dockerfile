# Set master image
FROM php:8.1-fpm-alpine

# Set working directory
WORKDIR /var/www/html

# Add more extensions
RUN apk update && apk add --no-cache \
    build-base shadow supervisor \
    php-common \
    php-mbstring \
    php-xml \
    php-openssl \
    php-json \
    php-phar \
    zip \
    gd \
    php-dom \
    php-session \
    zlib

# Add and Enable PHP-PDO Extenstions for PHP connect Mysql
RUN docker-php-ext-install pdo pdo_mysql pcntl

RUN docker-php-ext-enable pdo_mysql

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Remove Cache
RUN rm -rf /var/cache/apk/*

COPY ./supervisord.conf /etc/supervisord.conf
COPY ./supervisor.d /etc/supervisor.d

# Use the default production configuration for PHP-FPM ($PHP_INI_DIR variable already set by the default image)
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

# Add UID '1000' to www-data
RUN usermod -u 1000 www-data

# Copy existing application directory
COPY . .

# Chang app directory permission
RUN chown -R www-data:www-data .

ENV ENABLE_CRONTAB 1
ENV ENABLE_HORIZON 0

ENTRYPOINT ["sh", "/var/www/html/.docker/docker-entrypoint.sh"]

CMD supervisord -n -c /etc/supervisord.conf
