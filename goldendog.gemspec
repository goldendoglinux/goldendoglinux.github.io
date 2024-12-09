# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "gdl"
  spec.version       = "0.1.0"
  spec.authors       = ["Alexia Steinberg"]
  spec.email         = ["alexia@goldendoglinux.org"]

  spec.summary       = "A Jekyll theme for the GoldenDog Linux website."
  spec.homepage      = "https://goldendoglinux.github.io"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3"
end
