# goldendog

Welcome to the GoldenDog Linux Jekyll Layout. 
This is a layout I built for the [GoldenDog Linux Official Homepage](https://www.goldendoglinux.org)

If you find it useful and would like to deploy this layout on your github pages account, the easiest thing to do would be to just fork this project and do all the changes that you like.

This layout is MIT licensed. You don't even need to credit myself (Alexia) or GoldenDog, but it is always nice if you do :3 

Also, It would make me really happy to know if you are running this somewhere. It's the first time I try to build a complete Jekyll Theme. 


## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "goldendog"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: goldendog
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install goldendog

## Usage

TODO: Write usage instructions here. Describe your available layouts, includes, sass and/or assets.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/goldendog. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `goldendog.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
