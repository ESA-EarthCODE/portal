# EarthCODE Portal

The EarthCODE community portal shall provide an entry point to the collaborative development tools and resources, as well as access to community guidelines and open documentation to help researchers adopt FAIR principles in their scientific practice. Through community and capacity building focused on Open Science, the activity shall promote a trusted collaborative experience of conducting Earth system science.


# Local development

```bash
docker run -it --rm -v ./:/d/ -p 127.0.0.1:3000:3000 -p 127.0.0.1:5173:5173 node:22 bash
cd /d/
npm ci
npm run dev
```
