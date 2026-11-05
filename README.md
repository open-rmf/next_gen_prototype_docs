# next_gen_prototype_docs
Documentation of the Open-RMF next generation prototype. As the prototype is under active development, documentation may sometimes not be up-to-date.

## **Access**

**Access** the public documentation portal below:

> https://open-rmf.github.io/next_gen_prototype_docs/latest/

## **Build**

If you wish to view it **locally**, run the commands below:

```bash
python3 -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
```

```bash
. .venv/bin/activate
```

```bash
# Build the site
python build_multiversion.py --pointers --output_dir .build
```

```bash
# Preview the site
python -m http.server -d .build/docs
```

**Access** the local documentation portal below:

> http://localhost:8000
