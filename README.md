# flagd-cache-demo


```
minikube start
kubectl create -f deploy.yaml
minikube tunnel (if required)
```
The client app will be available at `http://localhost` and will be communicating via ingress with the flagd instance in the cluster.  

Pressing the button will trigger a flag evaluation, which will be taken from cache following the first successful request, if the `flag-config` config map is updated and the flag configuration for the bannerColor, the cache for this flagkey is busted.